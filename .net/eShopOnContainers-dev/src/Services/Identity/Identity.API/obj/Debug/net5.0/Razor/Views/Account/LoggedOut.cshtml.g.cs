#pragma checksum "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "644c723a30772d5d8197cbc9453d9165813e61ca"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Account_LoggedOut), @"mvc.1.0.view", @"/Views/Account/LoggedOut.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"644c723a30772d5d8197cbc9453d9165813e61ca", @"/Views/Account/LoggedOut.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b35857dd199098649926cf8d40cf1622e149676b", @"/Views/_ViewImports.cshtml")]
    public class Views_Account_LoggedOut : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Microsoft.eShopOnContainers.Services.Identity.API.Models.AccountViewModels.LoggedOutViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n<div class=\"container page-header\">\n    <h1>\n        Logout\n        <small>You are now logged out</small>\n    </h1>\n\n");
#nullable restore
#line 9 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
     if (Model.PostLogoutRedirectUri != null)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <div>\n            Click <a");
            BeginWriteAttribute("href", " href=\"", 305, "\"", 340, 1);
#nullable restore
#line 12 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
WriteAttributeValue("", 312, Model.PostLogoutRedirectUri, 312, 28, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">here</a> to return to the\n            <span>");
#nullable restore
#line 13 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
             Write(Model.ClientName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</span> application.\n        </div>\n");
#nullable restore
#line 15 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("\n");
#nullable restore
#line 17 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
     if (Model.SignOutIframeUrl != null)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <iframe style=\"display:none\" width=\"0\" height=\"0\" class=\"signout\"");
            BeginWriteAttribute("src", " src=\"", 566, "\"", 595, 1);
#nullable restore
#line 19 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
WriteAttributeValue("", 572, Model.SignOutIframeUrl, 572, 23, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral("></iframe>\n");
#nullable restore
#line 20 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Services\Identity\Identity.API\Views\Account\LoggedOut.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Microsoft.eShopOnContainers.Services.Identity.API.Models.AccountViewModels.LoggedOutViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
