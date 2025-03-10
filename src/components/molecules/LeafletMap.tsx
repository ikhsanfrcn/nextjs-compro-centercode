'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMapComponent'), { ssr: false });

export default LeafletMap;
