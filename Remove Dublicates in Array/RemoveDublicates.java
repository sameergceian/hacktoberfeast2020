class RemoveDublicates 
{
	static int dublicates(int array[],int len)
	{
		if(len==0 || len ==1)
			return len;
		
		int[] temp =new int[len];
		int j=0;
		for(int i=0;i<len-1;i++)
		{
			if(array[i]!=array[i+1])
				temp[j]=array[i];
			j++;
		}
		for(int i=0;i<j;i++)
		{
			array[i]=temp[i];
		}
		return j;
	}
	public static void main(String[] args) 
	{
		int arr[]=new int[]{1,2,2,5,8,6,10,5,6};
		System.out.println("Array is:");
		for(int i=0;i<arr.length;i++)
		{
			System.out.print(arr[i]+" ");
		}

		int len=arr.length;
		int take=dublicates(int arr[],len)
	}
}
