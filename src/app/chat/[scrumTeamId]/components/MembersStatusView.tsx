import { Container } from "@mui/material";

export default function MembersStatusView() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                marginTop: '10px',
                marginBottom: '10px',
                border: '0.5px solid #EDEDED',
                borderRadius: '5px',
                height: '60px',
                boxShadow: 1
         }}>
            <p>members status</p>
        </Container>
    )
}