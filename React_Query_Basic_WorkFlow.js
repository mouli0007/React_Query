########################### React Query Again #################################### 

CMD : ###############
   npm i @tanstack/react-query
   npm i @tanstack/react-query-devtools 
   
   
   2=> Create a Provider and wrap our main application 
   

#### 2 Main Important Queries
   import { useQuery, useMutation } from "@tanstack/react-query";

const POST = [
  { id: 1, title: "POST 1" },
  { id: 2, title: "POST 2" },
];

#### UseQuery ##### 

    const { data, isError, isLoading } = useQuery({
        
		// Unique Identifier
       queryKey: ["posts"],
       queryFn: () => wait(1000).then(() => [...POST]),
  });


#### useMutation ##### 


 // Mutating the POST Array !

  const newPostMutation = useMutation({
    mutationFn: (title) =>
      wait(1000).then(() =>
        POST.push({
          id: crypto.randomUUID(),
          title,
        })
      ),
  });
  
  #### onclick={() => newPostMutation.mutate("Post_John_Wick")}
  
  
  ###### ReactQueryDevTools #####
  ### import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

  For Debugging and managing our qquery data 
  
  
  
  
  ###### Invalidating the Query (Refetch after adding or removing the data) #####
  
  
  #### Basic Syntax ####
  
    const queryClient = useQueryClient();
	
	  onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
	
	
	#### Where To Use ####
	
  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        POST.push({
          id: crypto.randomUUID(),
          title: title,
        })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });


#### Refetch after a specific time interval ##### 


#### Syntax
 refetchInterval : 1000
 
 
 #### where to use #### 
 
   
  const { data, isError, isLoading } = useQuery({
    // Unique Identifier
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POST]),
    refetchInterval: 1000,
  });
  
  
  
  #### OnMutate ##### 
  
  use it when If you want to return any data or do somehting before the mutation 
  
  #### Syntax #### 
  
  
   onMutate  : (variables)=>{
   
   return {
      name : 'Mouli VJ'
      }
