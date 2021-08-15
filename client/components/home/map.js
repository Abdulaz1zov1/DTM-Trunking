import {YMaps, Map, Placemark, ZoomControl, FullscreenControl} from 'react-yandex-maps';
import {useMediaQuery} from "react-responsive";



const Ymap = () =>{
    const isBigScreen = useMediaQuery({ query: '(max-width: 990px)' })
    const h = "70vh";
    const w = "100"
    const style = {
        height: h,
        zIndex:"20",
        width:w,

    };
    return(
        <div style={style}>
            <YMaps>
                <div>
                    <Map     defaultState={{
                        center: [42.068154,  -88.309284],
                        zoom: 14
                    }}
                             style={{width: '100%', height: h}}

                    >
                        <Placemark defaultGeometry={[42.068154,  -88.309284]} />
                        <FullscreenControl />
                    </Map>
                </div>
            </YMaps>
        </div>
    )
}

export default Ymap