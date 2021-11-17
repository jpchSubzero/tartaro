using Volo.Abp.Reflection;

namespace Eva.Demo.Permissions
{
    public class DemoPermissions
    {
        public const string GroupName = "Demo";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(DemoPermissions));
        }
    }
}