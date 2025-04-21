const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind( 
  async ()=> {
    const config = await getDefaultConfig(__dirname);
    return config
  }, 
  { input: "./styles/global.css" });