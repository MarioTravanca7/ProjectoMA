using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Past Activity 1",
                    Description = "Activity 2 months ago",
                    Category = "drinks",
                    City = "London",
                    Venue = "Pub",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Past Activity 2",
                    Description = "Activity 1 month ago",
                    Category = "culture",
                    City = "Paris",
                    Venue = "Louvre",
                    IsShow = false,
                },
                new Activity
                {
                    Title = "Future Activity 1",
                    Description = "Activity 1 month in future",
                    Category = "culture",
                    City = "London",
                    Venue = "Natural History Museum",
                    IsShow = false,
                },
                new Activity
                {
                    Title = "Future Activity 2",
                    Description = "Activity 2 months in future",
                    Category = "music",
                    City = "London",
                    Venue = "O2 Arena",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Future Activity 3",
                    Description = "Activity 3 months in future",
                    Category = "drinks",
                    City = "London",
                    Venue = "Another pub",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Future Activity 4",
                    Description = "Activity 4 months in future",
                    Category = "drinks",
                    City = "London",
                    Venue = "Yet another pub",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Future Activity 5",
                    Description = "Activity 5 months in future",
                    Category = "drinks",
                    City = "London",
                    Venue = "Just another pub",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Future Activity 6",
                    Description = "Activity 6 months in future",
                    Category = "music",
                    City = "London",
                    Venue = "Roundhouse Camden",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Future Activity 7",
                    Description = "Activity 2 months ago",
                    Category = "travel",
                    City = "London",
                    Venue = "Somewhere on the Thames",
                    IsShow = true,
                },
                new Activity
                {
                    Title = "Future Activity 8",
                    Description = "Activity 8 months in future",
                    Category = "film",
                    City = "London",
                    Venue = "Cinema",
                    IsShow = true,
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}