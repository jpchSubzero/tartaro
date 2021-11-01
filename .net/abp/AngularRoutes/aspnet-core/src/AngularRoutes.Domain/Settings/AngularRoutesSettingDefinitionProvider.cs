using Volo.Abp.Settings;

namespace AngularRoutes.Settings
{
    public class AngularRoutesSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(AngularRoutesSettings.MySetting1));
        }
    }
}
