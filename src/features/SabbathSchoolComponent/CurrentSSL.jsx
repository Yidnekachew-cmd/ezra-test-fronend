import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetSSLOfDayQuery,
  useGetSSLOfQuarterQuery,
} from "./../../services/SabbathSchoolApi";
import DateConverter from "./DateConverter";
function CurrentSSL() {
  const { quarter, id } = useParams();
  const {
    data: lessonDetails,
    error: lessonError,
    isLoading: lessonIsLoading,
  } = useGetSSLOfDayQuery({ path: quarter, id: id });
  const {
    data: quarterDetails,
    error: quarterError,
    isLoading: quarterIsLoading,
  } = useGetSSLOfQuarterQuery(quarter);
  const daysOfWeek = ["ቅዳሜ", "እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ"];

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6"></div>
  );
}

export default CurrentSSL;
