import { Card } from "@rneui/themed"
import { FlatList, View } from "react-native";
import React from "react";
import LeaveHistoryLabel from "./LeaveHistoryLabel";

export default LeaveHistoryList = ({ history }) => {
    return (<>
        <View>
            {
                history.map((item) => {
                    return (
                        <Card key={item.id}>
                            <Card.Title>{item.month}</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                                <LeaveHistoryLabel item={item} />
                            </View>
                        </Card>
                    )
                })
            }
        </View>
        {/* <FlatList
            data={history}
            renderItem={({ item }) =>
                <View>
                    <Card>
                        <Card.Title>{item.month}</Card.Title>
                        <Card.Divider />
                        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                            <LeaveHistoryLabel item={item} />
                        </View>
                    </Card>
                </View>
            }
            keyExtractor={item => item.id}
        /> */}
    </>)
}