import React from "react";
import {
    SearchBox,
    ChooseCityLabel,
    WelcomeWeatherLogo
} from './styled';
import CloudImg from '../../assets/images/perfect-day.svg';

const CitySearch = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
            <WelcomeWeatherLogo >
                {/* src={"/weather-forecast-app/icons/perfect-day.svg"} */}
                <img src={CloudImg} alt="cloud" />
            </WelcomeWeatherLogo>
            <ChooseCityLabel>Search your city weather</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input
                    onChange={(e) => updateCity(e.target.value)}
                    placeholder="City"
                />
                <button type={"submit"}>Search</button>
            </SearchBox>
        </>
    );
};
export default CitySearch;
