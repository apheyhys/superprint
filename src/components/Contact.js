import React from 'react';
import {YMaps, Map, Placemark, FullscreenControl, ZoomControl} from "react-yandex-maps";

export default function Contact() {
    return (

        <YMaps>
            <Map
                defaultState={{
                center: [
                    60.078609, 30.247873
                ],
                zoom: 16,
                controls: []
            }}
                width="100%"
                height="100%">
                <Placemark geometry={[60.078609, 30.247873]}/>
                <FullscreenControl/>
                <ZoomControl/>
            </Map>
        </YMaps>

    );
}
