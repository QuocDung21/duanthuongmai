import {
  AiFillDashboard,
  AiOutlineShoppingCart,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiCategory, BiLoaderCircle } from "react-icons/bi";
import { FiSettings, FiUsers } from "react-icons/fi";
import { CiChat1 } from "react-icons/ci";
import { BsCurrencyDollar, BsChat } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
export const allNav = [
  {
    id: 1,
    title: "Bảng điều khiển",
    icon: <AiFillDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Đặt hàng",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Danh mục sản phẩm",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Người bán hàng",
    icon: <FiUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Yêu cầu thanh toán",
    icon: <BsCurrencyDollar />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Trạng thái người bán",
    icon: <FiUsers />,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 7,
    title: "Sellers Request",
    icon: <BiLoaderCircle />,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 8,
    title: "Chat Seller",
    icon: <CiChat1 />,
    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },
  {
    id: 9,
    title: "Dashboard",
    icon: <AiFillDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Thêm sản phẩm",
    icon: <AiOutlinePlus />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    title: "Tất cả sản phẩm",
    icon: <RiProductHuntLine />,
    role: "seller",
    path: "/seller/dashboard/products",
  },
  {
    id: 12,
    title: "Sản phẩm giảm giá",
    icon: <RiProductHuntLine />,
    role: "seller",
    path: "/seller/dashboard/discount-products",
  },
  {
    id: 13,
    title: "Đơn đặt hàng",
    icon: <AiOutlineShoppingCart />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Thanh toán",
    icon: <BsCurrencyDollar />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Trò chuyện khách hàng",
    icon: <BsChat />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Hỗ trợ trò chuyện",
    icon: <CiChat1 />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 17,
    title: "Thông tin cá nhân",
    icon: <FiUsers />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
  {
    id: 18,
    title: "Phân quyền chức năng",
    icon: <FaUserShield />,
    role: "admin",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 19,
    title: "Cài đặt",
    icon: <FiSettings />,
    role: "admin",
    path: "/seller/dashboard/chat-support",
  },
];
