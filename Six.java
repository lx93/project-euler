public class Six{
	public static void main(String[] args){
		System.out.println("fdsdfs");
		System.out.println(sumSquare(100));

		System.out.println(squareSum(100));

		System.out.println(squareSum(100)-sumSquare(100));
	}

	private static int sumSquare;
	
	private static int squareSum;

	private static int sumSquare(int max) 
	{
		int sum = 0;
		for (int i=1;i<=max;i++)
		{
			sum+=i*i;
		}
		return sum;
		
	}


	private static int squareSum(int max) 
	{
		int sum = 0;
		for (int i=1;i<=max;i++)
		{
			sum+=i;
		}
		int square = sum*sum;
		return square;
	}
}


