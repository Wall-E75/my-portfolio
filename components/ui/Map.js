'use client'
import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css"; // Import du CSS de Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false }); // Empeche le chargement de react-leaflet cote server SSR en l'important dynamiquement
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const L = typeof window !== "undefined" ? require("leaflet") : null;
import styles from '@styles/Map.module.css';
import { useState, useEffect } from 'react';

function Map() {
    const [L, setL] = useState(null);
    const position = [48.8772, 2.4067];

    useEffect(() => {
        import("leaflet").then((leaflet) => {
            setL(leaflet);
        });
    }, []);

    if (!L) return null; // ✅ Empêche le rendu si Leaflet n'est pas encore chargé

    // ✅ Correction de l'icône personnalisée
    const customIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });


    return(
        <MapContainer
            center={position}
            zoom={12} 
            scrollWheelZoom={false}
            className={styles.map}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    Ma position
                </Popup>
            </Marker>
        </MapContainer>
    );
};


export default Map;