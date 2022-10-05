using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MT_Customer.Migrations
{
    public partial class updateTableId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "customers",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "customers",
                newName: "CustomerId");
        }
    }
}
