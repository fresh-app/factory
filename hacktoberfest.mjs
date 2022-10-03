import { execSync } from 'child_process'

const list = execSync('yarn factory list --json').toString()
let n = 0
const task = (text) => {
  const id = ++n
  console.log(`${id}. ${text}`)
}
for (const { name, info } of JSON.parse(list)) {
  if (name.startsWith('_')) {
    continue
  }
  const file = `./src/generators/${name}.ts`
  if (!info.frameworkUrl) {
    task(`In file ${file}, DO NOT DELETE the "frameworkUrl" property.`)
  }
  if (!info.frameworkDocumentationUrl) {
    task(
      `In file ${file}, DO NOT DELETE the "frameworkDocumentationUrl" property.`,
    )
  }
  if (info.framework) {
    if (info.framework.url !== info.frameworkUrl) {
      task(
        `In file ${file}, the "framework.url" property should be "${info.frameworkUrl}".`,
      )
    }
    if (info.framework.documentationUrl !== info.frameworkDocumentationUrl) {
      task(
        `In file ${file}, the "framework.documentationUrl" property should be "${info.frameworkDocumentationUrl}".`,
      )
    }
  } else {
    task(
      `In file ${file}, please add the "framework" property to the object, copying info from "frameworkUrl" and "frameworkDocumentationUrl".`,
    )
  }
}

console.log(`Number of remaining tasks: ${n}`)
