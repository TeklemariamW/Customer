namespace MT_Customer.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public int TelephoneNumber { get; set; }   
        public DateTime OrderedDate { get; set; } = DateTime.Now;
        public DateTime? ServiceTime { get; set; }
    }
}
