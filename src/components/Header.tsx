'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleBackClick = React.useCallback(() => {
        router.back();
    }, [router]);

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                onClick={handleBackClick}
                size="large"
                edge="start"
                color="inherit"
                aria-label="go back"
                sx={{ mr: 2 }}
            >
                <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CollabHub
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}