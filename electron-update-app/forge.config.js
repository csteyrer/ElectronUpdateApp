module.exports = {
  packagerConfig: {},
  makers: [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "electron_update_app"
          }
        },
        {
          "name": "@electron-forge/maker-zip"
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
  ],
  publisher: [
      {
        name: '@electron-forge/publisher-github',
        config: {
            repository: {
                owner: 'csteyrer',
                name: 'ElectronUpdateApp'
            },
            prerelease: true
        }
      }
  ]
}