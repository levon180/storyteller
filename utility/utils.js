import {Button, Image, Space, Tag} from "antd";


export const avatarMenuItems = [
  {
    label: "Profile",
    key: "0",
  },
  {
    label: "Settings",
    key: "1",
  },
  {
    type: "divider",
    key: "2"
  },
  {
    label: "Log out",
    key: "3",
  },
];

export const menuItems = [
  {
    key: 1,
    icon: <span className="icon-schedule" />,
    label: 'Schedule',
  },
  {
    key: 2,
    icon: <span className="icon-analytics" />,
    label: 'Analytics',
  },
  {
    key: 3,
    icon: <span className="icon-stories" />,
    label: 'Stories',
  },
  {
    key: 4,
    icon: <span className="icon-engagement-units" />,
    label: 'Engagement Units',
  },
  {
    key: 5,
    icon: <span className="icon-ads" />,
    label: 'Ads',
  },
  {
    key: 6,
    icon: <span className="icon-cms-users" />,
    label: 'CMS Users',
  },
  {
    key: 7,
    icon: <span className="icon-roles" />,
    label: 'Roles',
  },
  {
    key: 8,
    icon: <span className="icon-apps" />,
    label: 'Apps',
  },
  {
    key: 9,
    icon: <span className="icon-user-guide" />,
    label: 'User Guide',
  },
];

const STATUSES = {
  1: 'Live',
  2: 'Scheduled',
  3: 'Post'
}

export const statusOptions = Object.entries(STATUSES).map(([value, label]) => ({
  value, label
}))

export const storiesData = [
  {
    key: 1,
    title: 't 1',
    pages: [
      { url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', id: 1, },
      { url: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg', id: 2, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 3, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 4, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 5, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 6, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 7, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 8, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 9, },
      { url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', id: 10, },
    ],
    updatedAt: '20-08-2023',
    status: 1,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 2,
    title: 't 2',
    pages: [],
    updatedAt: '20-08-2023',
    status: 2,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 3,
    title: 't 3',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 4,
    title: 't 4',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 5,
    title: 't 5',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '10-09-2023',
  },
  {
    key: 6,
    title: 't 6',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 7,
    title: 't 7',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 8,
    title: 't 8',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 9,
    title: 't 9',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 10,
    title: 't 10',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 11,
    title: 't 11',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 12,
    title: 't 12',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
  {
    key: 13,
    title: 't 13',
    pages: [],
    updatedAt: '20-08-2023',
    status: 3,
    publishedAt: '11-07-2023',
    finishedAt: '1-09-2023',
  },
];

export const columns = ({colorPrimary, colorSuccess}) => [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => {
      return a.title.localeCompare(b.title)
    },
    ellipsis: true,
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Pages',
    dataIndex: 'pages',
    key: 'pages',
    width: "273px",
    render: (pages) => (<Space size={5}>
      {pages.slice(0, 6).map((page) => (
        <Image
          key={page.id}
          src={page.url}
          alt=""
          width={29}
          height={52}
          preview={false}
          className="radius-3"
        />
      ))}
      {pages.length > 6 && (
        <div
          style={{
            height: 52,
            width: 29,
            backgroundColor: '#EBEBEB',
            color: '#444647',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          +{pages.length - 6}
        </div>
      )}
    </Space>),
  },
  {
    title: 'Last Modified',
    key: 'updatedAt',
    dataIndex: 'updatedAt',
    sorter: (a, b) => a.updatedAt - b.updatedAt,
    ellipsis: true,
    render: (updatedAt) => <div>{updatedAt}</div>,
  },
  {
    title: 'Status',
    key: 'status',
    sorter: (a, b) => a.status - b.status,
    ellipsis: true,
    render: (_, {status}) => {
      const color = status === 1 ? colorSuccess : status === 2 ? colorPrimary : 'grey'
      return (
        <Tag color={color}>
          {STATUSES[status]}
        </Tag>
      )
    },
  },
  {
    title: 'Live From',
    key: 'publishedAt',
    dataIndex: 'publishedAt',
    sorter: (a, b) => a.publishedAt - b.publishedAt,
    ellipsis: true,
    render: (publishedAt) => <div>{publishedAt}</div>,
  },
  {
    title: 'Ends',
    key: 'finishedAt',
    dataIndex: 'finishedAt',
    sorter: (a, b) => a.finishedAt - b.finishedAt,
    ellipsis: true,
    render: (finishedAt) => <div>{finishedAt}</div>,
  },
  {
    title: '',
    render: () => (
      <Space size={20}>
        <Button danger icon={<span className="icon-trash" />}/>
        <Button type="primary" icon={<span className="icon-edit" />}>Edit</Button>
      </Space>
    ),
  },
];
