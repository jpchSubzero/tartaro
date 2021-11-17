using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace Eva.Demo
{
    [DependsOn(
        typeof(DemoDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class DemoApplicationContractsModule : AbpModule
    {

    }
}
