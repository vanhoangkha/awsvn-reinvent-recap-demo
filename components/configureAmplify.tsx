// components/ConfigureAmplify.tsx
'use client'

import { Amplify } from 'aws-amplify'

import outputs from '@/amplify_outputs.json'
Amplify.configure(outputs)

export default function ConfigureAmplifyClientSide() {
	return null
}
