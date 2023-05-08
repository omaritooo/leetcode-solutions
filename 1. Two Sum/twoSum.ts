function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    let res = []
    
    for (let i = 0; i < nums.length; i++)
    {
        if (map.get(target - nums[i]) !== undefined && map.get(target - nums[i]) !== i)
        {
            res.push(i)
            res.push(map.get(target - nums[i]))
        }
        map.set(nums[i],i)
    }


    return res
};