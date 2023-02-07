import React, { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
  const [fetchCoins, setFetchCoins] = useState([]);

  const getProducts = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    await axios
      .get(url)
      .then((res) => {
        setFetchCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full h-auto bg-primary text-white px-10 py-12">
      <div>
        <h1>Your Assets</h1>

        <div className="overflow-auto shadow-lg px-10 py-6">
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th className=" border-b-2   border-gray-50  text-left px-5 py-4">
                  Coins
                </th>
                <th className=" border-b-2   border-gray-50  text-left px-5 py-4">
                  Holdings
                </th>
                <th className=" border-b-2  border-gray-50  text-left px-5 py-4">
                  Price
                </th>
                <th className=" border-b-2  border-gray-50 text-left px-5 py-4">
                  Market Gap
                </th>
                <th className=" border-b-2  border-gray-50  text-left px-5 py-4">
                  Volume(24h)
                </th>
                <th className=" border-b-2  border-gray-50  text-left px-5 py-4">
                  Last 24h{" "}
                </th>
                <th className=" border-b-2  border-gray-50  text-left px-5 py-4">
                  Profit/Loss
                </th>
              </tr>
            </thead>
            {fetchCoins.slice(0, 6).map((props) => (
              <tbody>
                <tr>
                  <td className=" px-5 py-4 whitespace-nowrap">
                    <span className="flex">
                      <img
                        className="h-6 w-6 rounded-full object-cover	 bg-white"
                        src={props.image}
                        alt=""
                      />
                      <div className="ml-2 ">{props.name}</div>
                      <div className="ml-2 text-transform: uppercase text-sm text-gray-400">
                        {props.symbol}
                      </div>
                    </span>
                  </td>
                  <td className=" px-5 py-4 whitespace-nowrap">
                    ${props.total_volume}
                  </td>
                  <td>${props.current_price}</td>
                  <td className=" px-5 py-4 whitespace-nowrap">
                    ${props.market_cap}
                  </td>
                  <td className=" px-5 py-4 whitespace-nowrap">
                    {props.high_24h}
                  </td>
                  <td className=" px-5 py-4 whitespace-nowrap">
                    {props.low_24h}
                  </td>
                  <td className=" px-5 py-4 whitespace-nowrap">
                    {props.price_change_percentage_24h}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
