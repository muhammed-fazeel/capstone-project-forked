using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UpSkillWebApi.Migrations
{
    /// <inheritdoc />
    public partial class cratedtablereviews : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Review_CourseId",
                table: "Review",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Review_Course_CourseId",
                table: "Review",
                column: "CourseId",
                principalTable: "Course",
                principalColumn: "CourseId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Review_Course_CourseId",
                table: "Review");

            migrationBuilder.DropIndex(
                name: "IX_Review_CourseId",
                table: "Review");
        }
    }
}
