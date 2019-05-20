module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'LoadingButton',
      externals: {
        react: 'React'
      }
    }
  }
}
