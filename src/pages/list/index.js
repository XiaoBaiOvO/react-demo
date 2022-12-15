import {Button, Card, Col, Divider, Layout, List, Space, Switch, Tag} from "antd";
import {useState} from "react";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const data = {
    tabList: [
        {
            key: 'changeLog',
            tab: 'Change Log',
        },
        {
            key: 'commentThreads',
            tab: 'Comment Threads',
        },
    ],
    changeLogData: [
        {
            key: "1",
            userInfo: {
                name: "Luigi Toscano",
            },
            summary: "Uploaded patch set 1.",
            tags: [],
            detail: "Uploaded patch set 1.",
            patchSetNo: 1,
            updateTime: "Nov 30, 2020 18:24"
        },
        {
            key: "2",
            userInfo: {
                name: "Zuul",
            },
            summary: "Added to reviewer:",
            tags: [
                {
                    color: "",
                    value: "Zuul"
                },
            ],
            detail: "Uploaded patch set 1.",
            patchSetNo: 1,
            updateTime: "Nov 30, 2020 21:55"
        },
        {
            key: "3",
            userInfo: {
                name: "Zuul",
            },
            summary: "Uploaded patch set 1.",
            tags: [
                {
                    color: "green",
                    value: "Verified +1"
                },
            ],
            action: [],
            detail: "Build succeeded (check pipeline).",
            patchSetNo: 1,
            updateTime: "Nov 30, 2020 21:55"
        },
        {
            key: "4",
            userInfo: {
                name: "Sergii Golovatiuk",
            },
            summary: null,
            tags: [
                {
                    color: "#87d068",
                    value: "Code-Review +2"
                },
                {
                    color: "#87d068",
                    value: "Workflow +1"
                },
            ],
            action: [],
            detail: "",
            patchSetNo: 1,
            updateTime: "Dec 01, 2020 07:16"
        },
    ]
};

export default () => {

    const [tabKey, setTabKey] = useState('changeLog');
    const [showHiddenEntries, setShowHiddenEntries] = useState(false)
    const [openItemList, setOpenItemList] = useState([])

    const onTabChange = (key) => {
        setTabKey(key);
    };
    const onHeaderSwitchChange = (checked) => {
        setShowHiddenEntries(checked)
        if(checked) {
            data.changeLogData.unshift({
                key: "1-1",
                userInfo: {
                    name: "Luigi Toscano",
                },
                summary: "Added to reviewer:",
                tags: [
                    {
                        color: "",
                        value: "Alfredo Garcia"
                    },
                ],
                detail: "Uploaded patch set 1.",
                patchSetNo: null,
                updateTime: "Nov 30, 2020 18:24"
            })
        } else {
            data.changeLogData.shift()
        }
    };

    const clickListItem = (item) => {
        const newOpenItemList = openItemList.concat()
        if (newOpenItemList.indexOf(item.key) > -1) {
            newOpenItemList.splice(newOpenItemList.indexOf(item.key), 1)
        } else {
            newOpenItemList.push(item.key)
        }
        setOpenItemList(newOpenItemList)
    }

    const onClickExpandAll = () => {
        if (openItemList.length !== 5) {
            setOpenItemList(["1", "2", "3", "4", "1-1"])
        } else {
            setOpenItemList([])
        }

    }

    const changeLogListHeader = (
        <Space>
            <Switch onChange={onHeaderSwitchChange}/>
            <span>Show all entries</span>
            {showHiddenEntries ? null : "(1 hidden)"}
            <Button
                type="link"
                onClick={onClickExpandAll}
                style={{position: "absolute", right: 0, marginTop: -15}}
            >
                EXPAND ALL
            </Button>
        </Space>
    )

    const changeLogList = (
        <>
            <List
                header={changeLogListHeader}
                bordered
                dataSource={data.changeLogData}
                renderItem={(item) =>
                    <>
                        <List.Item onClick={() => clickListItem(item)}>
                            <Col flex="150px">
                                <strong>{item.userInfo.name}</strong>
                            </Col>
                            <Col flex="auto">
                                <Space>
                                    <span>{item.summary}</span>
                                    {item.tags.map(
                                        (value, index) => {
                                        return <Tag key={index} color={value.color}>{value.value}</Tag>
                                        })
                                    }
                                    <div style={{position: "absolute", right: 0, marginTop: -10}}>
                                        {item.patchSetNo === null ? null :
                                            <>
                                                {item.key === "1" ? <Button type="link">VIEW DIFF</Button> : null}
                                                <Divider type="vertical"/>
                                                <span>PatchSet {item.patchSetNo}</span>
                                                <Divider type="vertical"/>
                                            </>
                                        }
                                        <span>{item.updateTime}</span>
                                        {openItemList.includes(item.key) ?
                                            <UpOutlined style={{marginLeft: 10}}/> :
                                            <DownOutlined style={{marginLeft: 10}}/>
                                        }
                                    </div>
                                </Space>
                            </Col>
                            {/*<strong>{item.userInfo.name}</strong>*/}
                            {/*<span>{item.summary}</span>*/}
                            {/*<div>*/}
                            {/*    <span>PatchSet {item.patchSetNo}</span>*/}
                            {/*    <Divider type="vertical" />*/}
                            {/*    <span>{item.updateTime}</span>*/}
                            {/*    <DownOutlined />*/}
                            {/*</div>*/}
                        </List.Item>
                        {openItemList.includes(item.key) ?
                            <List.Item style={{backgroundColor: "#eaeaea"}}>
                                <Space>
                                    <span style={{marginLeft: 30}}>{item.detail}</span>
                                    {item.tags.map(
                                        (value, index) => {
                                            return <Tag key={index} color={value.color}>{value.value}</Tag>
                                        })
                                    }
                                </Space>
                            </List.Item> :
                            null
                        }
                    </>
                }
            />
        </>
    )

    const commentThreadsList = (
        <div>
            <h3>PatchSet</h3>
            <Card
                size="small"
                title="daniel heart"
                extra={
                    <div>
                        <span>PatchSet 1</span>
                        <Divider type="vertical"/>
                        <span>Jul 11</span>
                        <DownOutlined style={{marginLeft: 10}}/>
                    </div>
                }
                style={{ width: 500, backgroundColor: "#fff7e4"}}
            >
                <p>very instersting though.</p>
            </Card>
            <br/>
            <Card
                size="small"
                title="daniel heart"
                extra={
                    <div>
                        <span>PatchSet 1</span>
                        <Divider type="vertical"/>
                        <span>Jul 11</span>
                        <DownOutlined style={{marginLeft: 10}}/>
                    </div>
                }
                style={{ width: 500, backgroundColor: "#fff7e4"}}
            >
                <p>another test, just ignore it. </p>
            </Card>
        </div>
    )

    return (
        <Layout style={{
            width: "100%",
            height: document.documentElement.clientHeight,
            alignItems: "center"}}
        >
            <Card
                style={{
                    margin: 20,
                    width: "100%",
                    maxWidth: 900,
                }}
                tabList={data.tabList}
                activeTabKey={tabKey}
                tabBarExtraContent={<a href="#">More</a>}
                onTabChange={(key) => {
                    onTabChange(key);
                }}
            >
                {tabKey === "changeLog" ? changeLogList : tabKey === "commentThreads" ? commentThreadsList : null}
            </Card>


        </Layout>
    )
}