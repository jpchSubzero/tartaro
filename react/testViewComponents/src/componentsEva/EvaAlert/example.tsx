import EvaAlert from "./index";
import { Grid } from "@material-ui/core";

const ExampleAlert = () => {
    return (
        <>
            <hr />
            alerts
            <hr />
            <div style={{ marginLeft: "16px" }}>
                <Grid container>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        variant={mode}
                                        content="Alert description"
                                        onClose={() => alert("Close clicked")}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        title="Alert Title"
                                        variant={mode}
                                        withIcon={true}
                                        onClose={() => alert("Close clicked")}
                                        content="Alert description"
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        title="Alert Title"
                                        variant={mode}
                                        onClose={() => alert("Close clicked")}
                                        content="Alert description"
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        variant={mode}
                                        withIcon={true}
                                        onClose={() => alert("Close clicked")}
                                        content="This is an alert description with two rows."
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        title="Alert Title"
                                        variant={mode}
                                        onClose={() => alert("Close clicked")}
                                        content="Alert description"
                                        withButtons={true}
                                        onConfirm={() =>
                                            alert("Continuar clicked")
                                        }
                                        onCancel={() => alert("Cancel clicked")}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        variant={mode}
                                        onClose={() => alert("Close clicked")}
                                        content="El tiempo de duración del código es de solo 5 minutos."
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Grid
                        container
                        item
                        xs={6}
                        sm={12}
                        md={6}
                        spacing={1}
                        direction="column"
                        style={{ marginBottom: "16px" }}
                    >
                        {["info", "success", "warning", "error"].map(
                            (mode, index) => (
                                <Grid item xs={3} key={index}>
                                    <EvaAlert
                                        variant={mode}
                                        withIcon={true}
                                        content="El tiempo de duración del código es de solo 5 minutos."
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={6}
                    spacing={1}
                    direction="column"
                    style={{ marginBottom: "16px" }}
                >
                    <Grid item xs={2}>
                        <EvaAlert variant="info" content="Alert description" />
                    </Grid>
                    <Grid item xs={2}>
                        <EvaAlert
                            title="Alert Title"
                            variant="info"
                            content="Alert description"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <EvaAlert
                            title="Alert Title"
                            variant="info"
                            content="Alert description"
                            withButtons={true}
                            onConfirm={() => alert("Continuar clicked")}
                            onCancel={() => alert("Cancel clicked")}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <EvaAlert
                            title="Alert Title"
                            withIcon={true}
                            variant="info"
                            content="Alert description"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <EvaAlert
                            variant="info"
                            content="This is an alert description with two rows."
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default ExampleAlert;
