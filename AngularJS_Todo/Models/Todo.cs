using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS_Todo.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public String Text { get; set; }
        public byte Priority { get; set; }
        public DateTime? DueDate { get; set; }
    }
}