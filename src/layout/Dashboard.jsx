
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import logo from '../assets/images/logo.png'
import { MdOutlineAccountBalanceWallet, MdOutlineAttachMoney } from "react-icons/md";
import { FaHandHoldingUsd, FaHistory } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
const Dashboard = () => {
    return (
        <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img={logo} imgAlt="Flowbite logo">
       <h1 className="text-2xl font-bodyFont text-[#14684E]"> Money Care</h1>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={MdOutlineAttachMoney}>
            <h1>Send Money</h1>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaHandHoldingUsd}>
          Cash-Out
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BsCashCoin}>
          Cash-in
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdOutlineAccountBalanceWallet}>
          Balance Inquiry
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaHistory}>
          Transactions History
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    );
};

export default Dashboard;