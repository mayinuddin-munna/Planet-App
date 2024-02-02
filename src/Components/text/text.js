import React from 'react'
import { presets } from './test.preset';
import { Text as RNText, StyleSheet } from 'react-native'

export default function Text({ children, preset = "default", style }) {
    const textStyle = StyleSheet.compose(presets[preset], style)
    return (
        <RNText style={textStyle}>
            {children}
        </RNText>
    )
}