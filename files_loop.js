const fs = require('fs')

const dir = '/Users/mukhammaddiyorkhaydaraliev/Downloads/task2'
const files = fs.readdirSync(dir)

for (const file of files) {
  console.log(file)
}