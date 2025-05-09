import axios from 'axios';

const API_BASE_URL = 'http://site1.local:8000/api/v2/document';

const API_TOKEN =  '483ee347c0fa0f9:427b7da01019459';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `token ${API_TOKEN}`,
  },
})

export const getBooks = async () => {
  try {
    const response = await apiClient.get('/Books',{
      params: {
        fields: JSON.stringify(["title","author","isbn"])
      },
    });
    return response.data.data;  
    
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];  
  }
};


export const getMembers = async () => {
  try {
    const response = await apiClient.get('/Members', {
      params: {
        fields: JSON.stringify(["name1","email","contact"])
      }
    });
    return response.data.data;  
    
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];  
  }
};

export const OverdueBooks = async () =>{
  try{
    const response = await apiClient.get('/Transactions',{
      params: {
        fields: JSON.stringify(["member_id","member","book","book_id","status","author","return_date","fine"])
      }
    })
    return response.data.data;

  }catch(error) {
    console.error("Error fetching transaction:",error);
    return [];
  }
}

export const IssuedBooks = async () =>{
  try{
    const response = await apiClient.get('/Transactions',{
      params: {
        fields: JSON.stringify(["member_id","member","book","return_date","issue_date","status"])
      }
    })
    return response.data.data;

  }catch(error) {
    console.error("Error fetching Issue books transaction:",error);
    return [];
  }
}