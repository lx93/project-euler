public class Seven{
	public static void main(String[] args)
	{
		int[] primes = new int[10001];
		primes[0] = 2;
		for (int i=1;i<primes.length;i++)
		{
			primes[i]=findNextPrime(primes[i-1]);
		}
		System.out.println(primes[10000]);
	}

	private static boolean isPrime(int num) 
	{
		for (int i=2;i<num;i++)
		{
			if (num%i==0) return false;
		}
		return true;
	}


	private static int findNextPrime(int num) 
	{
		num = num + 1;
		while (!isPrime(num)) num++;
		return num;
	}
}


