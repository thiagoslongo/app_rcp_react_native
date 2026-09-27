import { TabBar } from "react-native-tab-view";

interface SimulacaoTabBarProps {
  scrollable?: boolean;
  [key: string]: any;
}

const SimulacaoTabBar = ({
  scrollable = false,
  ...props
}: SimulacaoTabBarProps) => {
  const TabBarAny = TabBar as any;

  return (
    <TabBarAny
      {...props}
      style={{ backgroundColor: "#2D2343" }}
      indicatorStyle={{ backgroundColor: "#D0BCFF" }}
      activeColor="#ffffff"
      inactiveColor="rgba(255,255,255,0.6)"
      scrollEnabled={scrollable}
      tabStyle={scrollable ? { width: "auto" } : undefined}
      labelStyle={{ fontSize: 10, fontWeight: "bold", textTransform: "none" }}
    />
  );
};

export default SimulacaoTabBar;
