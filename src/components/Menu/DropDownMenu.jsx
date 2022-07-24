import { Menu, Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

const DropDownMenu = ({ categories }) => {
    const menu = (
        <div className="mt-2">
            <Menu>
                <Row gutter={[6, 6]}>
                    {categories.map((item, index) => (
                        <Col span={24} key={index}>
                            <Menu.Item style={{
                                backgroundColor: "#ffffff",
                            }}>
                                <Link to={"/category/" + item?._id}>
                                    <div className="text-center text-base">{item?.name}</div>
                                </Link>
                            </Menu.Item>
                        </Col>
                    ))}
                </Row>
            </Menu>
        </div>
    );
    return (
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Danh mục
            </a>
        </Dropdown>
    );
}

export default DropDownMenu;
