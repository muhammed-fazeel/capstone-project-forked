using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UpSkillWebApi.Migrations
{
    /// <inheritdoc />
    public partial class cratedenrolledcoursesusersandrolesv2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_User_UserId1",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_UserId1",
                table: "User");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "User");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "User",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_UserId1",
                table: "User",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_User_User_UserId1",
                table: "User",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "UserId");
        }
    }
}
