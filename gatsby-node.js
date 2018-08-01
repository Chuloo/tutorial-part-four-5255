const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  console.log('we are in createPages and creating /somePath page')

  createPage({
    path: `/somePath`,
    component: path.resolve(`src/components/template.js`)
  })
}

exports.onCreatePage = ({ page }) => {
  console.log('we are in onCreatePage', page.path)
}