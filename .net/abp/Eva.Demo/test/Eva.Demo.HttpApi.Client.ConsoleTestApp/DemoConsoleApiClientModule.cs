using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Eva.Demo
{
    [DependsOn(
        typeof(DemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DemoConsoleApiClientModule : AbpModule
    {
        
    }
}
