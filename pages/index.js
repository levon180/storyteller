import React, {useEffect, useMemo, useState} from "react";
import Mainlayout from "layouts/Mainlayout";
import {Button, Grid, Input, Select, Skeleton, Space, Table, theme} from "antd";
import {columns, storiesData, statusOptions} from "utility/utils";
import PortalComponent from "../components/PortalComponent";

const {useBreakpoint} = Grid;
const StoriesList = () => {
  const screens = useBreakpoint();

  const {
    token: {colorPrimary, colorSuccess},
  } = theme.useToken();

  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    title: '',
    statuses: [],
  });

  useEffect(() => {
    // Imitate data fetching
    setTimeout(() => {
      setStories(storiesData);
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const storiesCopy = [...storiesData];
    if (!filter.title && !filter.statuses.length) {
      setStories(storiesCopy);
    } else {
      const filtered = storiesCopy.filter((i) => {
        return !!((filter.title && i.title.includes(filter.title)) ||
          (filter.statuses.length && filter.statuses.includes(i.status.toString())));
      })
      setStories(filtered);
    }
  }, [filter.statuses.length, filter.title])

  const paginationInfo = useMemo(() => {
    const to = storiesData.length - (currentPage - 1) * 10;
    return `Showing ${currentPage === 1 ? 1 : (currentPage - 1) * 10} to ${to > 10 ? currentPage * 10 : (currentPage - 1) * 10 + to} of ${storiesData.length}`;
  }, [currentPage])

  const initialColumns = useMemo(() => columns({colorPrimary, colorSuccess}), [colorPrimary, colorSuccess])

  return (
    <div>
      <PortalComponent id="sub-header">
        <>
          <Space direction="vertical" className="full-width">
            <div className="d-flex justify-between">
              <h2>Stories</h2>
              {!screens.lg ? (
                <Button type="primary" icon={<span className="icon-plus"/>}>New Story</Button>
              ) : null}
            </div>
            <div  className="full-width d-flex justify-between">
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Input.Search
                  placeholder="Search"
                  allowClear
                  onChange={({target}) => {
                    setFilter((prev) => ({...prev, title: target.value}))
                  }}
                  style={{width: 200}}
                />
                <Select
                  mode="multiple"
                  showSearch
                  style={{width: 200, marginLeft: 10, marginRight: 10}}
                  placeholder="Search to Select"
                  options={statusOptions}
                  onChange={(e) => {
                    setFilter((prev) => ({...prev, statuses: e}))
                  }}
                />
                <div>{paginationInfo}</div>
              </div>
              {screens.lg ? (
                <Button type="primary" icon={<span className="icon-plus"/>}>New Story</Button>
              ) : null}
            </div>
          </Space>
        </>
      </PortalComponent>
      <Skeleton active loading={loading}>
        <Table
          columns={initialColumns}
          dataSource={stories}
          scroll={{x: 1300}}
          pagination={{
            total: storiesData.length,
            onChange: (page) => {
              setCurrentPage(page);
            },
          }}
        />
      </Skeleton>
    </div>
  )
};

StoriesList.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>
};

export default StoriesList;
