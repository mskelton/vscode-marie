const fs = require('fs')
const path = require('path')
const yaml = require('yaml')

const FILE_NAME = 'marie.tmGrammar'
const INPUT_DIR = path.join(__dirname, '..', 'src', 'syntaxes')
const OUTPUT_DIR = path.join(__dirname, '..', 'lib', 'syntaxes')

// Read and parse the yaml file
const yamlBuffer = fs.readFileSync(path.join(INPUT_DIR, `${FILE_NAME}.yaml`))
const json = yaml.parse(yamlBuffer.toString())

// Write the json file to the lib directory
fs.mkdirSync(OUTPUT_DIR, { recursive: true })
fs.writeFileSync(
  path.join(OUTPUT_DIR, `${FILE_NAME}.json`),
  JSON.stringify(json)
)
