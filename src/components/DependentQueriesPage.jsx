import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUser = (email) => {
  return axios.get(` http://localhost:4000/users/${email}`);
};

const fetchChannels = (channelId) => {
  return axios.get(` http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery({
    queryKey: ["user", email],
    queryFn: () => fetchUser(email),
  });

  const channelId = user?.data.channelId;

  const { data: courses } = useQuery({
    queryKey: ["user", channelId],
    queryFn: () => fetchChannels(channelId),
    enabled: !!channelId,
  });
  return <div>Dependent Queries Page</div>;
};

export default DependentQueriesPage;
