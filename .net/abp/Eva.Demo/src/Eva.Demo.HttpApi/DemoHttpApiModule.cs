﻿using Localization.Resources.AbpUi;
using Eva.Demo.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace Eva.Demo
{
    [DependsOn(
        typeof(DemoApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class DemoHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(DemoHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<DemoResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}