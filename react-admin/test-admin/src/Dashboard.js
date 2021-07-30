import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <Card>
        <CardHeader title="Plantalla de bienvenida" className="fs-5"/>
        <hr/>
        <CardContent>
            <div className="container">
            <div className="row">
            <div className="col">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex quam, aliquet sed mattis vitae, semper vel tellus. Integer eu mollis ligula. Proin id sagittis nisi. Morbi mollis vitae arcu eu scelerisque. Morbi elementum, leo eu tincidunt dignissim, mi urna egestas massa, a volutpat erat nisi at purus. Morbi vitae fringilla massa. Pellentesque convallis semper congue. Ut nec ligula auctor, iaculis nunc id, tincidunt leo. In hac habitasse platea dictumst.
            </p>
            </div>
            <div className="col">
            <p>
                Suspendisse non mi suscipit, venenatis leo non, mollis libero. Duis tristique ac orci sed placerat. Praesent nec volutpat eros, sed vestibulum justo. Sed ac bibendum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet interdum dolor, vitae venenatis nulla. Curabitur porttitor, neque nec rhoncus ornare, justo nunc ullamcorper quam, sit amet iaculis felis enim sit amet nulla. Nullam varius sodales mi. Quisque lorem lacus, tempus id condimentum non, accumsan nec augue. Morbi eu consectetur erat. Curabitur commodo nibh mi, non malesuada nulla feugiat ac. Pellentesque dictum orci nec est congue eleifend. Mauris vitae consectetur turpis. Quisque ac nulla urna.
            </p>
            </div>
            </div>
            </div>
        </CardContent>
        
    </Card>
);
