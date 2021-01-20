export type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
};

export type StatsData = [{
    id: number;
    title: String;
    number: String;
}]

export type Stats = {
    data: StatsData[]
}