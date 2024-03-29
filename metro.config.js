
// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
/** @type {import('@react-native/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})
// 2. Enable Tamagui
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})
