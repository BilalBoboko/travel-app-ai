import { View, Text } from 'react-native'
import React from 'react'
import PlaceCard from './PlaceCard';

interface geoCoordinatesProps {
    latitude: string,
    longitude: string,
}

export interface ActivityProps {
    activity: string,
    place: string,
    time: string
}

interface DailyPlanProps {
    activities: ActivityProps[],
    day: string
}

interface PlannedTripParams {
    dailyPlan: DailyPlanProps[]
}


export default function PlannedTrip({ dailyPlan }: PlannedTripParams) {
    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontFamily: "outfit-bold",
                fontSize: 20
            }}>🏕️ Plan Details</Text>

            {dailyPlan.map((plan) => (
                <View>
                    <Text style={{
                        fontFamily: "outfit-medium",
                        fontSize: 20,
                        marginTop: 20
                    }}>{plan.day}</Text>
                    {plan.activities.map((activity) => (
                        <PlaceCard activity={activity} />

                    ))}
                </View>
            ))}
        </View>
    )
}