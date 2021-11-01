using AngularRoutes.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AngularRoutes.Permissions
{
    public class AngularRoutesPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(AngularRoutesPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(AngularRoutesPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AngularRoutesResource>(name);
        }
    }
}
