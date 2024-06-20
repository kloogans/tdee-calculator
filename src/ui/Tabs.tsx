import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";

const MACRO_DISTRIBUTIONS = {
  "Low Carb": "40/40/20",
  "Moderate Carb": "30/35/35",
  "High Carb": "30/20/50",
};

interface ListItemListItemProps {
  name: string; // protein, fat, carb
  value: string;
}

interface ListItemProps {
  name: string; // lowCarb, moderateCarb, highCarb
  list: ListItemListItemProps[];
}

interface DataProps {
  name: string; //maintenance, cutting, bulking
  list: ListItemProps[];
}

interface TabsProps {
  data: DataProps[];
}

export function Tabs({ data }: TabsProps) {
  return (
    <Card className="mx-auto w-full flex flex-col border-2">
      <TabGroup className="h-full flex flex-col">
        <TabList
          className="flex items-center justify-center gap-2 !bg-transparent"
          variant="solid"
          defaultValue={1}
          color="indigo-600"
        >
          {data.map((item, index) => (
            <Tab key={index}>{item.name}</Tab>
          ))}
        </TabList>

        <TabPanels className="h-full flex-1 flex">
          {data.map((item, index) => (
            <TabPanel key={index} className="h-full flex-1">
              <ul className="h-full w-full grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-4">
                {item.list.map((listItem, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center text-lg rounded-2xl bg-indigo-600 shadow-md text-white h-full flex-1 py-4"
                  >
                    <span className="flex flex-col items-center text-sm border-b-2 pb-1 border-b-white mb-4">
                      {listItem.name}
                      <span className="text-xs">
                        {/* @ts-ignore */}
                        {MACRO_DISTRIBUTIONS[listItem.name]}
                      </span>
                    </span>
                    <ul className="flex gap-2 flex-col items-center md:items-between h-full">
                      {listItem.list.map((item, index) => (
                        <li
                          key={index}
                          className="w-full flex flex-col md:flex-row gap-2 items-center text-lg"
                        >
                          <span className="text-sm text-center md:text-left w-full">
                            {item.name}
                          </span>
                          <strong className="p-2 bg-indigo-500 rounded-2xl">
                            {item.value}
                          </strong>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Card>
  );
}
