const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */

module.exports = withNativeWind( 
  async ()=> {
    const config = await getDefaultConfig(__dirname);
    config.resolver.unstable_enablePackageExports = false
    config.resolver.resolveRequest = function packageExportsResolver(context, moduleImport, platform) {
      if (moduleImport === '<package>' || moduleImport.startsWith('<package>/')) {
        return context.resolveRequest(
          {
            ...context,
            unstable_conditionNames: ['browser'],
          },
          moduleImport,
          platform,
        );
      }
      
      return context.resolveRequest(context, moduleImport, platform);
    };
    return config
  }, 
  { input: "./styles/global.css" }
);

